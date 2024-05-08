import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
    const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
       <div className="home-content">
          <header className="home-header">
            <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn?.name || 'Guest'}
                subtext="Acces and manage your account and transactions efficiently."
            />

            <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.45}
                
            />
            </header>  

            RECENT TRANSACTIONS
       </div>
       <RightSidebar user={loggedIn}
       transactions={[]}
       banks={[{currentBalance: 1234.70}, {currentBalance: 1234.50}]}
       />
    </section>
  )
}

export default Home