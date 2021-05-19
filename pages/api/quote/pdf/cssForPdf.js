const cssTemplate =
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


  .section-1{
    padding-bottom: 2.5rem;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: repeat(2, max-content);
  }
  .section-1 img{
    height: 8rem;
    width: 8rem
  }

  .section-1-right{
    display: grid;
    row-gap: 1rem;
  }

  .section-2{
    display: grid;
    justify-content: space-between;
    align-items: start;
    grid-template-columns: repeat(2, max-content);
  }
  .section-2 h3{
    font-size: medium;
  }

  h4{
    font-size: small;
    color: pink;
  }

  .section-2-left{
    display: grid;
    row-gap: 1rem;
    align-items: start;
  }

  .section-2-right{
    display: grid;
    row-gap: 1rem;
    align-items: start;
    grid-template-rows: repeat(2, min-content);
  }

  .section-3 {
    padding: 2rem 0;
  }

  .section-3 h3{
    font-size: small;
    padding: .5rem;
  }

  .section-3 p{
    font-size: small;
    padding-top: .3rem;
    padding-bottom: .3rem;
    padding-left: .5rem;
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
    color: #EF648A;
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
    border: solid 1px white;
    height: 100%;
  }

  .section-4{
    display: grid;
    align-items: top;
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
  }

  .section-4 ul {
    padding-left: 2rem;
  }

  .section-4 h3{
    font-size: small;
  }
  .section-4 ul li{
    padding: .2rem;
    font-size: smaller;
  }

  footer ul{
    bottom:0;
    padding: 0;
    margin-top: 4rem;
    list-style: none;
    display: grid;
    justify-content: space-between;
    align-items: bottom;
    grid-template-columns: repeat(3, max-content);
    color: blue;
    font-size: smaller;
  }
`

export default cssTemplate