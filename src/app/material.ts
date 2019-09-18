import { MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule],
    exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule]
})
export class MaterialModule {

}