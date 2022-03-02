import { Component, OnInit, ViewChild } from '@angular/core';
import { projectNewData } from './data';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  @ViewChild('gantt')
  public ganttObj: GanttComponent;
  public data: object[];
  public taskSettings: object;
  public columns: object[];
  public labelSettings: object;
  public selectionSettings: object;
  public projectStartDate: Date;
  public projectEndDate: Date;
  public splitterSettings: object;
  public toolbar: any;
  allowRowDragAndDrop = false;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Product concept',
        StartDate: new Date(2021, 2, 2, 0, 0, 0),
        EndDate: new Date(2021, 2, 3, 23, 59, 59),
        indicators: [
          {
            date: new Date(2021, 2, 3, 23, 59, 59),
            name: 'Indicator',
          },
        ],
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks',
      indicators: 'indicators',
    };
    this.columns = [
      { field: 'TaskID', headerText: 'ID', width: 80 },
      { field: 'TaskName', headerText: 'Name', width: 250 },
      { field: 'StartDate' },
      { field: 'EndDate' },
      { field: 'Duration' },
      { field: 'Progress' },
      { field: 'Predecessor', headerText: 'Dependency' },
    ];
    this.selectionSettings = {
      type: 'Multiple',
    };
    this.labelSettings = {
      leftLabel: 'TaskName',
    };
    this.projectStartDate = new Date('02/01/2021');
    this.projectEndDate = new Date('02/28/2021');
    this.splitterSettings = {
      columnIndex: 3,
    };
    this.toolbar = [{ text: 'switch', id: 'toolbarswitch' }];
  }
  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'toolbarswitch') {
      this.allowRowDragAndDrop = !this.allowRowDragAndDrop;
      this.ganttObj.treeGrid.allowRowDragAndDrop = this.allowRowDragAndDrop;
    }
  }

  databound() {
    console.log('Running...');
    this.ganttObj.fitToProject();
  }
}
