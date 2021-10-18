import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { __importDefault } from "tslib";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})
export class StarComponent implements OnChanges{
    
    @Input()
    rating: number = 1;
    starWidth: number = 1;


    ngOnChanges(): void {
       this.starWidth = this.rating * 74 / 5 ;
    }

}