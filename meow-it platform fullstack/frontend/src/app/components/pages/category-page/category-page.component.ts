import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  category: any;
  categoryId: string | undefined;

  categories = [
    { id: 1, name: 'Nature', icon: 'fas fa-leaf', imagePath: 'assets/images/def/nature.jpg' },
    { id: 2, name: 'Human', icon: 'fas fa-user', imagePath: 'assets/images/def/human.jpeg' },
    { id: 3, name: 'Animals', icon: 'fas fa-paw', imagePath: 'assets/images/def/animals.jpg' },
    { id: 4, name: 'Ambiances', icon: 'fas fa-tree', imagePath: 'assets/images/def/ambiances.jpg' },
    { id: 5, name: 'Instruments', icon: 'fas fa-music', imagePath: 'assets/images/def/instruments.jpeg' },
    { id: 6, name: 'Things', icon: 'fas fa-cog', imagePath: 'assets/images/def/things.jpg' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params['id'];
      this.category = this.categories.find(category => category.id.toString() === this.categoryId);
    });
  }

  navigateBack(): void {
    const pathToNavigateBack = '/home';

    this.router.navigate([pathToNavigateBack]);
  }

}