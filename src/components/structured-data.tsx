export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://bdix-finder.vercel.app/#webapp',
        url: 'https://bdix-finder.vercel.app',
        name: 'BDIX Finder | Bangladesh ISP & FTP Server Directory',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript',
        description:
          'Real-time BDIX peering checker, ISP detector, bandwidth speed tester, and curated directory of 25+ active Bangladesh BDIX FTP, Live TV, Sports, and Software servers.',
        creator: {
          '@type': 'Organization',
          name: 'ProtoXen',
          url: 'https://protoxen.com/',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bdix-finder.vercel.app/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is BDIX and BDIX FTP Server?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'BDIX (Bangladesh Internet Exchange) allows local ISPs in Bangladesh to peer and exchange traffic locally at ultra-high speeds (up to 1 Gbps) without consuming international bandwidth quotas. BDIX FTP servers are local media repositories hosted on BDIX-connected networks for bufferless streaming and downloading.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why do BDIX FTP servers not open on mobile data?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'BDIX FTP servers are hosted on private local broadband ISP networks (e.g. Amber IT, Link3, Carnival, Circle, Dot Internet). Mobile operators (Grameenphone, Robi, Banglalink, Teletalk) do not route traffic to private BDIX local IP addresses.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I test my BDIX internet speed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can test your BDIX speed directly on BDIX Finder using the BDIX Speed Test tab. It measures your download throughput in Mbps directly against high-speed local peering nodes.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
