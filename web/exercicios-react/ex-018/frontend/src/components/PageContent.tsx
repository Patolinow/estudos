import classes from './PageContent.module.css';

interface IPageContent {
  title: string;
  children: JSX.Element
}

function PageContent({ title, children }:IPageContent) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
