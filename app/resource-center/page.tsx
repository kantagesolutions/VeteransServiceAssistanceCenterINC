import ResourceDirectory from '@/components/ResourceDirectory';
import {PageIntro,Assistance} from '@/components/Shared';
export const metadata={title:'Resource Center'};
export default function Resources(){return <><PageIntro title="Veteran Resource Center"><p>A quick-reference directory of local organizations across Augusta/CSRA area - food, housing, healthcare, veteran support, and more.</p></PageIntro><ResourceDirectory/><Assistance/></>}
