import { Card, Typography } from "antd";
import style from "./About.module.scss";
import Footer from "components/Layouts/Footer";
import Values from "./components/Values";
import Features from "./components/Features";
import Credits from "./components/Credits";
import Support from "./components/Support";

const About = () => {
	return (
		<>
			<div className={style.about}>
				<Card
					className={style.about__card}
					bordered={false}
					cover={
						<div className={style.about__card__intro}>
							<Typography.Paragraph
								className={style.about__card__intro_text}
							>
								Hey there, fellow developers! I hope you're
								having a fantastic day and your code is running
								smoothly. Don't worry if it's not; we've all
								been there. I've been in the software
								development game for quite some time now, and I
								remember the days when I constantly searched for
								tools to make my life easier.
								<br />
								<br />
								Tools like Postman, Faker, JSON Placeholder and
								many others have been my trusted allies in those
								challenging times. They helped me test my APIs,
								generate fake data for testing, and even mock up
								entire backends. But even with these tools, I
								felt something was missing. I wanted a tool that
								would not only help me but also improve the
								workflows of other devs around the world.
								<br />
								<br />
								So, after many sleepless nights and countless
								cups of ☕ & 🧋, I'm thrilled to introduce you
								to BinaryTree - a tool born out of pure passion
								and determination. BinaryTree is designed to
								save you time and effort, streamline your
								workflow, and help you overcome the challenges
								we developers face daily.
								<br />
								<br />I believe that we rise by lifting others,
								and I hope BinaryTree will be a valuable
								addition to your developer toolkit. Happy
								coding!
								<br />
								<br />
								<p>{`— A node in the BinaryTree.`}</p>
							</Typography.Paragraph>
						</div>
					}
				>
					<div className={style.about__card__container}>
						<Values />
						<Features />
						<Credits />
						<Support />
					</div>
				</Card>
			</div>
			<Footer />
		</>
	);
};

export default About;
