import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
//*** libraries ***//
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
//*** components ***//
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";

//** store ***//
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { HeaderMobileComponent } from "./components/header/header-mobile/header-mobile.component";
import { HeaderWideComponent } from "./components/header/header-wide/header-wide.component";
import { FooterWideComponent } from "./components/footer/footer-wide/footer-wide.component";
import { FooterMobileComponent } from "./components/footer/footer-mobile/footer-mobile.component";
import { JoinModalComponent } from "./modals/join-modal/join-modal.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeaderMobileComponent,
    HeaderWideComponent,
    FooterWideComponent,
    FooterMobileComponent,
    JoinModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([]),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 100, // Retains last 100 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
