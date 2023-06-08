interface IPageContentProps {
  title: string,
  children: JSX.Element;
}

function PageContent({ title, children }:IPageContentProps) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
