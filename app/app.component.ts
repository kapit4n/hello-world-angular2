import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  			<h1>
  			My First Angular 2 App This {{varValue}} {{hero.name}}
  			</h1>
  			 `
})

export class AppComponent { 
	varValue = "Hello World!!";
	hero: Hero = {
	  id: 1,
	  name: 'Windstorm'
	};
}

export class Hero {
  id: number;
  name: string;
}
