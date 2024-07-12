import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import { BehaviorSubject, finalize, take } from 'rxjs';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalsComponent {
  image$ = this.animalsService.getAnimals().pipe(
    take(1),
    finalize(() => this.loading$.next(false)),
  );
  loading$ = new BehaviorSubject<boolean>(true);
  breakingBadQuote$ = this.animalsService.getBreakingBadQuote().pipe(take(1));

  constructor(private animalsService: AnimalsService) {}
}
