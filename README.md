# Add the AppRoutingModule
In Angular, the best practice is to load and configure the router in a separate, top-level module. The router is dedicated to routing and imported by the root AppModule.

First, the app-routing.module.ts file imports RouterModule and Routes so the application can have routing capability


# Routes
Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.


The @NgModule metadata initializes the router and starts it listening for browser location changes.

The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot():

    imports: [ RouterModule.forRoot(routes) ]


The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.

# RouterOutlet

Next, AppRoutingModule exports RouterModule to be available throughout the application.

The router-outlet tells the router where to display routed views.

The RouterOutlet is one of the router directives that became available to the AppComponent because AppModule imports AppRoutingModule which exported RouterModule. The ng generate command you ran at the start of this tutorial added this import because of the --module=app flag. If you didn't use the ng generate command to create app-routing.module.ts, import AppRoutingModule into app.module.ts and add it to the imports array of the NgModule.

## Add a navigation link using routerLink
A routerLink attribute is set to "/heroes", the string that the router matches to the route to HeroesComponent. The routerLink is the selector for the RouterLink directive that turns user clicks into router navigations. It's another of the public directives in the RouterModule.

The browser refreshes and displays the application title and heroes link, but not the heroes list.


# HttpClient

HTTP is a request/response protocol. You make a request, it returns a single response.

In general, an observable can return more than one value over time. An observable from HttpClient always emits a single value and then completes, never to emit again.

      getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
      }


This particular call to HttpClient.get() returns an Observable<Hero[]>, which is an observable of hero arrays. In practice, it only returns a single hero array.