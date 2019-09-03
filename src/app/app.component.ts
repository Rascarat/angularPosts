import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts = [
    {
      title: 'Test',
      content: 'Test content',
    },
    {
      title: 'Test2',
      content: 'Test content2',
    },
    {
      title: 'Coucou je suis un post',
      content: 'Je suis un texte très long qui ne rentre pas sur une seule ligne mais sur plusieurs. Je suis un texte très long qui ne rentre pas sur une seule ligne mais sur plusieurs. Je suis un texte très long qui ne rentre pas sur une seule ligne mais sur plusieurs.'
    },
    {
      title: 'Post ajouté après la guerre',
      content: 'Je suis un post qui arrive après tout le monde pour vérifier que ça marche'
    }
  ]
  
}
