import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'sunbird-card-component',
  styleUrl: 'sunbird-card-component.css',
})
export class SunbirdCardComponent {

  @Prop() cardtitle: string;
  @Prop() carddescription: string;
  @Prop() cardimage: string;
  @Prop() cardprogress: number;
  @Prop() cardbuttonname: string;
  @Prop() cardbuttonurl: string;
  @Prop() btnName: string = '';

  btnClick(e){
    console.log("Button Click == ", e);
  }

  render() {
    return (
      <div class="card">
        <img class="card-img-top" src={this.cardbuttonurl} alt=""/>
          <div class="card-body">
            <h5 class="card-title">{this.cardtitle}</h5>
            <p class="card-text">{this.carddescription}</p>
            <a href={this.cardbuttonurl} class="btn btn-primary">{this.cardbuttonname}</a>
            { this.btnName ? <button onClick={ e => this.btnClick(e)}>{this.btnName}</button> : ''}
          </div>
      </div>
    );
  }
}
