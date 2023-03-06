import Header from '../components/Header'
import owl from '../photo/owl-12.png'
import LayoutLogin from '../Layout/LayoutLogin'
const HomePage = () => {
  return (
    <div>
      <Header />
      <LayoutLogin>
        <div className="  hidden lg:block flex-1 m-auto p-3">
          <img src={owl} className=" h-max w-3/4 "></img>
        </div>
        <div className="flex-1 text-center align-bottom m-auto p-3">
          Welcome
        </div>
      </LayoutLogin>
    </div>
  )
}

export default HomePage
