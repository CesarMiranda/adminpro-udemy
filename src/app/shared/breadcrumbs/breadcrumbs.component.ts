import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  etiqueta: string = '';

  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta
   ) {
     this.getDataRouter()
      .subscribe( data => {
        console.log(data);
        this.etiqueta = data.titulo;
        this.title.setTitle( this.etiqueta );

        let metaTag: MetaDefinition = {
          name: 'description',
          content: this.etiqueta
        };

        this.meta.updateTag(metaTag);
        console.log(this.meta);
      });
  }
  getDataRouter() {
    return this.router.events
      .filter( evento => evento instanceof ActivationEnd)
      .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null )
      .map( (evento: ActivationEnd) => evento.snapshot.data );
  }

  ngOnInit() {
  }

}
