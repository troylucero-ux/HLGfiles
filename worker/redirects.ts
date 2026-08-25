// One-time 301 redirect map from the old WordPress site's (highlightreg.com) URL structure to
// this site's, so existing Google rankings and any bookmarked/shared links survive the migration.
// Keys are pathnames with no trailing slash (the lookup in index.ts normalizes both forms to this).
// Source: highlightreg.com's Yoast sitemap, fetched 2026-08-25.
export const redirects: Record<string, string> = {
	'/project': '/case-studies/',
	'/project/the-burlington-portfolio': '/case-studies/the-burlington-portfolio-westlake-apartments/',
	'/project/941-normandie-ave-los-angeles-ca-90029': '/case-studies/941-normandie-ave-east-hollywood-apartments/',
	'/project/925-n-san-vicente-blvd-west-hollywood-ca-90069': '/case-studies/925-n-san-vicente-blvd-west-hollywood-apartments/',
	'/project/6938-coldwater-canyon-ave-north-hollywood-ca-91605': '/case-studies/6938-coldwater-canyon-ave-north-hollywood-apartments/',
	'/project/467-s-bonnie-brae-st-los-angeles-ca-90057': '/case-studies/467-s-bonnie-brae-st-westlake-apartments/',
	'/project/3148-james-m-wood-blvdlos-angeles-ca-90006': '/case-studies/3148-james-m-wood-blvd-koreatown-apartments/',
	'/project/2429-cheremoya-avelos-angeles-ca-90068': '/case-studies/2429-cheremoya-ave-beachwood-canyon-apartments/',
	'/project/140-westmoreland-avelos-angeles-ca-90004': '/case-studies/140-westmoreland-ave-koreatown-apartments/',
	'/project/11667-goshen-avelos-angeles-ca-90049': '/case-studies/11667-goshen-ave-brentwood-apartments/',
	'/project/11642-kiowa-avelos-angeles-ca-90049': '/case-studies/11642-kiowa-ave-brentwood-apartments/',
	'/project/1201-s-orange-grov-ave-los-angeles-ca-90019': '/case-studies/1201-s-orange-grove-ave-mid-wilshire-apartments/',
	'/project/236-s-bonnie-brae-st-los-angeles-ca-90057': '/case-studies/236-s-bonnie-brae-st-westlake-apartments/',
	'/project/453-s-gramercy-pl-los-angeles-ca-90020': '/case-studies/453-s-gramercy-pl-koreatown-apartments/',
	'/project/5455-inglewood-blvd-culver-city-ca-90230': '/case-studies/5455-inglewood-blvd-culver-city-apartments/',

	'/success-stories': '/testimonials/',
	'/josh-kaplan': '/about/',
	'/troy-lucero': '/about/',
	'/privacy-policy-2': '/privacy-policy/',
};
