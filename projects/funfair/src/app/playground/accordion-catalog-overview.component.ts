import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrightrailAccordionComponent, BrightrailAccordionItemComponent } from 'brightrail';

@Component({
  selector: 'app-accordion-catalog-overview',
  standalone: true,
  imports: [RouterLink, BrightrailAccordionComponent, BrightrailAccordionItemComponent],
  templateUrl: './accordion-catalog-overview.component.html',
  styleUrl: './accordion-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionCatalogOverviewComponent {}
