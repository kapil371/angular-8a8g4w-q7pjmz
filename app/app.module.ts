import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { TextBoxAllModule, NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ BrowserModule, GanttAllModule, DropDownListAllModule, CheckBoxAllModule, TextBoxAllModule, NumericTextBoxAllModule, MultiSelectAllModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
