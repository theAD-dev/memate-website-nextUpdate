// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import CustomerStoriesPageSingle from '../../../page-components/customer-stories-single';

export async function generateMetadata({ params }){
  const resolvedParams = await params;
  
  if(resolvedParams.slug === "camera-fix"){
    const metadata = {
      title: 'Camera Repair Software Example | MeMate Case Study',
      description: 'Discover how Camera Fix used MeMate to streamline repairs, quotes, and team coordination — real results for electronics repair business software. Call us now.',
      openGraph: {
        title: 'Camera Repair Software Example | MeMate Case Study',
        description: 'Discover how Camera Fix used MeMate to streamline repairs, quotes, and team coordination — real results for electronics repair business software. Call us now.',
      },
    }
    return metadata;

  }else if(resolvedParams.slug === "pro-vinyl"){
    const metadata = {
      title: 'Pro Vinyl Case Study | MeMate | Car Wrap Software Success',
      description: 'Discover how Pro Vinyl streamlined car wrap operations with MeMate’s business management software. Real success story for automotive wrap businesses. Visit Now.',
      openGraph: {
        title: 'Pro Vinyl Case Study | MeMate | Car Wrap Software Success',
        description: 'Discover how Pro Vinyl streamlined car wrap operations with MeMate’s business management software. Real success story for automotive wrap businesses. Visit Now.',
      },
    }
    return metadata;

  }else if(resolvedParams.slug === "elite-life"){
    const metadata = {
      title: 'MeMate Software for Membership Services | Elite Life',
      description: 'See how Elite Life streamlines operations with MeMate software for exclusive membership services, enhancing client management and service quality.',
      openGraph: {
        title: 'MeMate Software for Membership Services | Elite Life',
        description: 'See how Elite Life streamlines operations with MeMate software for exclusive membership services, enhancing client management and service quality.',
      },
    }
    return metadata;
  } else if(resolvedParams.slug === "boat-wizard"){
    const metadata = {
      title: 'Boat Wizard Case Study | MeMate Marine Service Software',
      description: 'Discover how Boat Wizard improved marine service operations using MeMate’s business management software. Real case study for marine service businesses. Call us.',
      openGraph: {
        title: 'Boat Wizard Case Study | MeMate Marine Service Software',
        description: 'Discover how Boat Wizard improved marine service operations using MeMate’s business management software. Real case study for marine service businesses. Call us.',
      },
    }
    return metadata;
  } else if(resolvedParams.slug === "sorted-media"){
    const metadata = {
      title: 'Sorted Media Case Study | MeMate Photography Software',
      description: 'Discover how Sorted Media runs 40+ shoots daily using MeMate’s photography business management software. Streamlined booking, scheduling, and contractors.',
      openGraph: {
        title: 'Sorted Media Case Study | MeMate Photography Software',
        description: 'Discover how Sorted Media runs 40+ shoots daily using MeMate’s photography business management software. Streamlined booking, scheduling, and contractors.',
      }
    }
    return metadata;
  }
}

export default async function CustomerStorySlug({ params }) {
  const resolvedParams = await params;
  console.log(resolvedParams)


  return (
    // <AppWrapper>
      <CustomerStoriesPageSingle params={resolvedParams} />
    // </AppWrapper>
  );
  
}
