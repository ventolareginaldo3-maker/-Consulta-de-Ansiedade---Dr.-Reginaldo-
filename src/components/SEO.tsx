import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Ansiedade Mococa | Dr. Reginaldo Ventola: Método Acalme-se", 
  description = "Especialista em ansiedade em Mococa/SP. Tratamento especializado para ansiedade, pânico e depressão através da Psicanálise e Hipnoterapia. Se você busca por um psicanalista em Mococa, conheça o Método Acalme-se.",
  canonical,
  ogType = "website",
  ogImage = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop",
  keywords = "psicanalista mococa, ansiedade mococa, psicanálise mococa, hipnoterapia mococa, tratamento ansiedade mococa, psicologo mococa, saude mental mococa, crise de panico mococa, depressao mococa, metodo acalme-se, dr reginaldo ventola",
  structuredData
}) => {
  const currentUrl = canonical || window.location.href;
  const siteTitle = title.includes("Método Acalme se") ? title : `${title} | Método Acalme se`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="referrer" content="no-referrer" />
      <link rel="canonical" href={currentUrl} />
      <meta name="google-site-verification" content="PW9eTbkquPIe4ocLqkttLlFCPcc16GkYhXeTg_JTGvo" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["MedicalBusiness", "Physician"],
          "name": "Dr. Reginaldo Ventola - Psicanalista e Especialista em Ansiedade em Mococa",
          "alternateName": "Método Acalme-se",
          "image": ogImage,
          "description": description,
          "url": currentUrl,
          "telephone": "+5519992416095",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua XV de Novembro, 268, Sala 10",
            "addressLocality": "Mococa",
            "addressRegion": "SP",
            "postalCode": "13730-000",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -21.4658,
            "longitude": -47.0047
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "20:00"
          },
          "sameAs": [
            "https://www.instagram.com/dr.reginaldoventola",
            "https://www.facebook.com/dr.reginaldoventola"
          ],
          "medicalSpecialty": ["Psychiatry", "Psychoanalysis", "Psychology", "MentalHealth"]
        })}
      </script>
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
