import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemPage } from './item';
import { ItemDetailPage } from './item-detail';
import { ItemDialogPage } from './item-dialog';

@NgModule({
  declarations: [
    ItemDialogPage
  ],
  imports: [
    IonicPageModule.forChild(ItemDialogPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemDialogPage
  ]
})
export class ItemDialogPageModule {
}
