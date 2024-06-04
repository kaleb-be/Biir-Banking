import React from 'react'
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
	const loggedIn = {firstName: 'Kaleb', lastName: 'Be', email: 'kaleb@proton.me'}
	return (
		<section className="home">
			<div className={'home-content'}>
				<header className={'home-header'}>
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.firstName || "Customer"}
						subtext="Access and manage your account and transactions..."
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.70}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>
			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{currentBalance:123.32}, {currentBalance:1250.21}]}
			/>
		</section>
	)
}
export default Home