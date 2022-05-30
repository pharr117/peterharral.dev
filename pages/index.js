import Heading from '../components/display/Heading'
import CenterPage from '../components/layout/pages/CenterPage'

export default function Home() {
  return (
    <CenterPage>
      <Heading>Hello</Heading>
      <Heading component="h2">Hello</Heading>
      <Heading component="h3">Hello</Heading>
      <Heading component="h4">Hello</Heading>
      <Heading component="h5">Hello</Heading>
      <Heading component="h6">Hello</Heading>
    </CenterPage>
  );
}
