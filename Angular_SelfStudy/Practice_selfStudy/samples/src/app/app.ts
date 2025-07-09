import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Parent1Component } from './parent1-component/parent1.component'
import { TemplateComponent } from './template-component/template.component'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Parent1Component, TemplateComponent],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    protected title = 'samples'
}
