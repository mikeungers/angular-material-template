import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SessionService } from './session.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'template';
  mobileQuery: MediaQueryList;
  public readonly routes = routes.filter(x => x.data?.showInMenu);

  private _mobileQueryListener: () => void;

  constructor(public sessionService: SessionService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}