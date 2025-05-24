import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: ReactNode;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Easy to Use",
		Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
		description: (
			<>
				Powered by{" "}
				<a
					href="https://github.com/facebook/docusaurus"
					rel="noreferrer noopener"
					target="_blank"
				>
					Docusaurus
				</a>{" "}
				to make your project onboarding seamless and effortless experience.
			</>
		),
	},
	{
		title: "Step By Step Walkthrough",
		Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
		description: (
			<>
				Step by step walkthrough the project with <code>code</code> examples
				from the project itself.
			</>
		),
	},
	{
		title: "Focus On What Really Matters",
		Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>
				The documentation focuses on the core concepts that really matters in
				creating an overall understanding of the project.
			</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
