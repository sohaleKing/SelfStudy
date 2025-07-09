import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { HttpRest } from '../http-rest.service'

@Component({
    selector: 'app-parent1-component',
    templateUrl: './parent1.component.html',
    styleUrl: './parent1.component.css',
})
export class Parent1Component implements OnInit {
    result: any
    constructor(private httpRest: HttpRest, private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.httpRest.getContent().subscribe((data) => {
            this.result = JSON.stringify(data)
            this.cdr.detectChanges() //
        })
    }
}
