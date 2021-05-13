const quoteCss =
`html,
  body {
    padding: 1rem;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

  a {
      color: inherit;
      text-decoration: none;
    }

  * {
      box-sizing: border-box;
    }

  h1, h2, h3, h4, h5, h6, p{
    margin: 0;
    padding: 0;
  }

  h3{
    font-size: medium;
    font-weight: 500;
  }

  p{
    font-size: medium;
    font-weight: 300;
  }

  .section-1{
    padding-bottom: 2.5rem;
    display: grid;
    align-items: top;
    justify-content: space-between;
    grid-template-columns: repeat(2, max-content);
  }

  .section-1 div{
    display: grid;
    align-items: top;
  }

  .section-1 div h1{
    padding-top: 1rem;
  }

  .section-1 img{
    height: 4.5rem;
    width: auto;
  }

  .section-2{
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 1.5fr 1fr;
  }

  .section-2-left h4{
    font-weight: 400;
  }

  .section-2-left{
    display: grid;
    row-gap: 1rem;
    justify-self: left;
  }

  .section-2-right{
    display: grid;
    row-gap: 1rem;
    justify-self: right;
  }

  .section-3 {
    padding: 2rem 0;
  }

  .section-3 h3{
    font-weight: 400;
    font-size: small;
    padding: .5rem;
  }

  .section-3 p{
    font-size: small;
    font-weight: 400;
    padding-top: .2rem;
    padding-bottom: .2rem;
    padding-left:.5rem;
  }

  .section-3 div{
    justify-self: right;
    list-style: none;
    padding: 1rem 0;
    margin: 0;
    display: grid;
    align-items: center;
    justify-content: right;
    column-gap: 0;
    grid-template-columns: repeat(2, max-content)
  }

  .section-3 div h4{
    font-size: medium;
    font-weight: 500;
  }

  .section-3 div p{
    font-size: medium;
    font-weight: 400;
  }

  .items-heading{
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 1.5fr 2.5fr .5fr .5fr .5fr;
    color: white;
  }

  .items-heading li{
    background-color: #002B4C;
    border: solid 1px white
  }

  .items-list{
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 1.5fr 2.5fr .5fr .5fr .5fr;
  }

  .items-list li{
    background-color: #F3F3F3;
    border: solid 1px white
  }

  .section-4 h3{
    font-size: small;
  }
  
  .outer li{
    padding: .2rem;
    font-size: smaller;
    font-weight: 200;
  }

  .inner li{
    padding: .2rem;
    font-size: small;
    font-weight: 200;
  }

  footer{
    text-align: center;
  }
`

export default quoteCss