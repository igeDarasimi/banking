import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
    const loggedIn = {firstName: 'Oluwadara', lastName: "Ige", email: "darasimige85@gmail.com"};
  return (
    <section className='home'>
       <div className="home-content">
          <header className="home-header">
            <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || 'Guest'}
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