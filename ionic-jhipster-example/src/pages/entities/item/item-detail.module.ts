import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemPage } from './item';
import { ItemDetailPage } from './item-detail';

@NgModule({
  declarations: [
    ItemDetailPage
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemDetailPage
  ]
})
export class ItemDetailPageModule {
}
