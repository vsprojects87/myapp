import { Component ,OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

  @Input() fromParent:string | undefined;

  ngOnInit(): void {
    
  }
}
