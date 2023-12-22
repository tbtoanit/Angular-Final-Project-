import { Component } from '@angular/core';
import { FooterComponent } from "../../common-component/footer/footer.component";
import { NavigationComponent } from "../../common-component/navigation/navigation.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', '../../../css/bootstrap.min.css'],
    imports: [FooterComponent, NavigationComponent]
})
export class HomeComponent {

}
