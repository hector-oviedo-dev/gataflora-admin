import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormAppComponent } from './form-app/form-app.component';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormCheckComponent } from './form-check/form-check.component';
import { FormCheckListComponent } from './form-check-list/form-check-list.component';
import { FormCompoundComponent } from './form-compound/form-compound.component';
import { FormDateComponent } from './form-date/form-date.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { ContentAppComponent } from './content-app/content-app.component';
import { ContentImageComponent } from './content-image/content-image.component';
import { ContentTextComponent } from './content-text/content-text.component';
import { ContentTitleComponent } from './content-title/content-title.component';

import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatDividerModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FormAppComponent,
    FormButtonComponent,
    FormCheckComponent,
    FormCheckListComponent,
    FormCompoundComponent,
    FormDateComponent,
    FormInputComponent,
    FormRadioComponent,
    FormSelectComponent,
    FormTextareaComponent,
    ContentAppComponent,
    ContentImageComponent,
    ContentTextComponent,
    ContentTitleComponent
  ],
  entryComponents:[
    FormAppComponent,
    FormButtonComponent,
    FormCheckComponent,
    FormCheckListComponent,
    FormCompoundComponent,
    FormDateComponent,
    FormInputComponent,
    FormRadioComponent,
    FormSelectComponent,
    FormTextareaComponent,
    ContentAppComponent,
    ContentImageComponent,
    ContentTextComponent,
    ContentTitleComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,

    BrowserAnimationsModule,
    FlexLayoutModule,

    MatDividerModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
