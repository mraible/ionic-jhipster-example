import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemDetailPageModule } from './item/item-detail.module';
import { ItemPageModule } from './item/item.module';
import { ItemDialogPageModule } from './item/item-dialog.module';
import { ItemDialogPage } from './item/item-dialog';
import { EntityPage } from './entity';

@NgModule({
  declarations: [
    EntityPage
    /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
  ],
  imports: [
    IonicPageModule.forChild(EntityPage),
    TranslateModule.forChild()
  ],
  exports: [EntityPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntityPageModule {
}
