import { MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatToolbarModule, MatMenuModule],
    exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatToolbarModule, MatMenuModule]
})
export class MaterialModule {

}