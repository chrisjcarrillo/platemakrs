export const GoogleTag = () => {
  return (
    <script dangerouslySetInnerHTML={{
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      gtag('config', 'AW-11418187763');
      ` }}
    />
  )
}

export const GoogleAnalytics = () => {
  return (
    <script dangerouslySetInnerHTML={{
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-52EHMW9BFY');
      ` }}
    />
  )
}