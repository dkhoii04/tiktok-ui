import Header from '~/components/Layout/components/Header';  //do trùng Header nên import riêng

function HeaderOnly({ children }) {
   return (
      <div>
         <Header />
         <div className="layout-body">
            <div className="layout-content">{children}</div>
         </div>
      </div>
   );
}

export default HeaderOnly;
