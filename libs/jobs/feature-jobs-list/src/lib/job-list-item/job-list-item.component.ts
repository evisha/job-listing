import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-article-list-item',
  standalone: true,
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.css'],
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListItemComponent {
  @Input() job!: any;
  @Output() favorite: EventEmitter<string> = new EventEmitter();
  @Output() unFavorite: EventEmitter<string> = new EventEmitter();
  @Output() navigateToJob: EventEmitter<string> = new EventEmitter();
  isClassActive: boolean = false;

  toggleFavorite(job: any) {
    if (job.favorited) {
      this.unFavorite.emit(job.slug);
    } else {
      this.favorite.emit(job.slug);
    }
  }
}
