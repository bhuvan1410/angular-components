import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SortingService } from './services/sorting/sorting-service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { APP_ROUTES } from './app.routes';
import { PipeDocumentationComponent } from './pipes/pipe-documentation/pipe-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { OtherDocumentationComponent } from './other/other-documentation/other-documentation.component';
import { CardComponent } from './components/card/card.component';
import { AccordianComponent } from './components/accordian/accordian.component';
import { SortByPipe } from './pipes/sort-by/sort-by.pipe';
import { CreditCardFormatterPipe } from './pipes/credit-card-formatter/credit-card-formatter.pipe';
import { BannerCutOutComponent } from './components/banner-cut-out/banner-cut-out.component';
import { CounterComponent } from './components/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { FilterTermPipe } from './pipes/filter-term/filter-term';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PillComponent } from './components/pill/pill.component';
import { PillsComponent } from './componenents/pills/pills.component';
import { PillFiltersComponent } from './components/pill-filters/pill-filters.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { QuoteComponent } from './components/quote/quote.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { FlattenPipe } from './pipes/flatten/flatten.pipe';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { PasswordComponent } from './components/password/password.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { DebounceSearchComponent } from './components/debounce-search/debounce-search.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { RichTextViewerComponent } from './components/rich-text-viewer/rich-text-viewer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { AutoResizeDirective } from './directives/autoresize/autoresize.directive';
import { DebounceClickDirective } from './directives/debounceclick/debounceclick.directive';
import { DisableControlDirective } from './directives/disablecontrol/disablecontrol.directive';
import { DraggableDirective } from './directives/draggable/draggable.directive';
import { DropzoneDirective } from './directives/dropzone/dropzone.directive';
import { FadeInDirective } from './directives/fadein/fadein.directive';
import { FeatureToggleDirective } from './directives/featuretoggle/featuretoggle.directive';
import { HideOnScrollDirective } from './directives/hideonscroll/hideonscroll.directive';
import { LazyLoadImageDirective } from './directives/lazy-load-image/lazy-load-image';
import { LoadingSkeletonDirective } from './directives/loadingskeleton/loadingskeleton.directive';
import { ObserveResizeDirective } from './directives/observeresize/observeresize.directive';
import { OnlyNumbersDirective } from './directives/onlynumbers/onlynumbers.directive';
import { PasswordToggleDirective } from './directives/passwordtoggle/passwordtoggle.directive';
import { PermissionDirective } from './directives/permission/permission.directive';
import { RippleEffectDirective } from './directives/rippleeffect/rippleeffect.directive';
import { ShowIfDesktopDirective } from './directives/showifdesktop/showifdesktop.directive';
import { ShowIfMobileDirective } from './directives/showifmobile/showifmobile.directive';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ComponentDocumentationComponent,
    PipeDocumentationComponent,
    DirectiveDocumentationComponent,
    ServiceDocumentationComponent,
    OtherDocumentationComponent,
    CardComponent,
    AccordianComponent,
    BannerCutOutComponent,
    SortByPipe,
    TruncatePipe,
    FilterTermPipe,
    FlattenPipe,
    CounterComponent,
    ProgressBarComponent,
    LoaderComponent,
    ToggleComponent,
    ModalComponent,
    PillComponent,
    PillsComponent,
    PillFiltersComponent,
    RibbonComponent,
    CreditCardFormatterPipe,
    OverlayComponent,
    QuoteComponent,
    CountdownTimerComponent,
    TopOfPageComponent,
    PasswordComponent,
    SimpleTableComponent,
    SearchListComponent,
    DebounceSearchComponent,
    BottomSheetComponent,
    SkeletonLoaderComponent,
    CreditCardInputComponent,
    RichTextViewerComponent,
    NotFoundComponent,
    SnackbarComponent,
    HighlightDirective,
    AutoResizeDirective,
    DebounceClickDirective,
    DisableControlDirective,
    DraggableDirective,
    DropzoneDirective,
    FadeInDirective,
    FeatureToggleDirective,
    HideOnScrollDirective,
    LazyLoadImageDirective,
    LoadingSkeletonDirective,
    OnlyNumbersDirective,
    ObserveResizeDirective,
    PasswordToggleDirective,
    PermissionDirective,
    RippleEffectDirective,
    ShowIfDesktopDirective,
    ShowIfMobileDirective


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),

  ],
  providers: [SortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
