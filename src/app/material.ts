import { MatButtonModule, MatCheckboxModule, MatInputModule, 
    MatIconModule, MatToolbarModule, MatMenuModule, MatTableModule,
    MatSlideToggleModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatInputModule, 
        MatIconModule, MatToolbarModule, MatMenuModule, MatTableModule,
        MatSlideToggleModule,
    ],
    exports: [MatButtonModule, MatCheckboxModule, MatInputModule, 
        MatIconModule, MatToolbarModule, MatMenuModule, MatTableModule,
        MatSlideToggleModule
    ]
})
export class MaterialModule {

}