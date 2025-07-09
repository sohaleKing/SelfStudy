import { TestBed } from '@angular/core/testing'

import { HttpRest } from './http-rest.service'

describe('HttpRest', () => {
    let service: HttpRest

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(HttpRest)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
})
