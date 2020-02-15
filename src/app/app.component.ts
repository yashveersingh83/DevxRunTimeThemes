import { Component } from '@angular/core';

import { Routes, Router } from '@angular/router';
import { RoutesService } from './routes.services';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RoutesService]
})

export class AppComponent {
  title = 'DevXtremeUI';
  menuRoutes: Routes;
    currentTheme = window.localStorage["seeisViewerTheme"] || "carmine";
    menuThemes = [{
        text: "",
        icon: "assets/images/color-scheme-" + this.currentTheme + ".svg",
        items: [
            { text: "Carmine", value: "carmine", icon: "assets/images/color-scheme-carmine.svg" },
            { text: "Dark Moon", value: "darkmoon", icon: "assets/images/color-scheme-darkmoon.svg" },
            { text: "Green Mist", value: "greenmist", icon: "assets/images/color-scheme-greenmist.svg" },
            { text: "Dark Violet", value: "darkviolet", icon: "assets/images/color-scheme-darkviolet.svg" },
            { text: "Soft Blue", value: "softblue", icon: "assets/images/color-scheme-softblue.svg" }
        ]
    }];

    constructor(private routesService: RoutesService, private router: Router, private themeService: ThemeService) {
      this.menuRoutes = routesService.getRoutes();
  }

  ngOnInit() {
    this.themeService.applyTheme();
}
  changeTheme(e: any) {
    if(e.itemData.value) {
        this.currentTheme = e.itemData.value;
        
        this.menuThemes[0].icon = e.itemData.icon;
        this.themeService.applyTheme(this.currentTheme);
    }
}
  selectedChild(routeItem: any): string {
    if(!routeItem.children) {
        return;
    }
    for(let routeChildren of routeItem.children) {
        if(routeChildren.data.link === this.router.url) {
            return ': ' + routeChildren.data.title;
        }
    }
}
  
}
