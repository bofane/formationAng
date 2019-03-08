var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"login","component":"PageLoginComponent"},{"path":"","redirectTo":"/login","pathMatch":"full"},{"path":"prestations","loadChildren":"./prestations/prestations.module#PrestationsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/prestations/prestation-routing.module.ts","module":"PrestationRoutingModule","children":[{"path":"","component":"PrestationsComponent"},{"path":"add","component":"PageAddPrestationComponent"}],"kind":"module"}],"module":"PrestationsModule"}]},{"path":"clients","loadChildren":"./clients/clients.module#ClientsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/clients/clients-routing.module.ts","module":"ClientsRoutingModule","children":[{"path":"","component":"ClientsComponent"}],"kind":"module"}],"module":"ClientsModule"}]},{"path":"**","loadChildren":"./page-not-found/page-not-found.module#PageNotFoundModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/page-not-found/page-note-found-routing.module.ts","module":"PageNoteFoundRoutingModule","children":[{"path":"**","component":"PagenotfoundComponent"}],"kind":"module"}],"module":"PageNotFoundModule"}]}],"kind":"module"}]}