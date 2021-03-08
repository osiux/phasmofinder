import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import { extractCritical } from '@emotion/server';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		const page = await ctx.renderPage();
		const styles = extractCritical(page.html);

		const isProduction = process.env.NODE_ENV === 'production';

		return { ...initialProps, ...page, ...styles, isProduction };
	}

	render() {
		// @ts-ignore
		const { isProduction } = this.props;

		return (
			<Html lang="en">
				<Head>
					{isProduction && (
						<>
							<script
								async
								src="https://www.googletagmanager.com/gtag/js?id=G-M2Q8J76RZD"
							/>
							<script
								dangerouslySetInnerHTML={{
									__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-M2Q8J76RZD', {
                      page_path: window.location.pathname,
                    });
                  `,
								}}
							/>
						</>
					)}
					<style
						// @ts-ignore
						data-emotion-css={this.props.ids.join(' ')}
						// @ts-ignore
						dangerouslySetInnerHTML={{ __html: this.props.css }}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
