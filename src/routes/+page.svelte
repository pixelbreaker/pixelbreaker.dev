<script>
  import Container from '$lib/components/Container.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import HubbleHQ from '$lib/assets/projects/hubble-hq.png?run';
  import Image from '$lib/components/Image.svelte';
  import MetaTitle from '$lib/components/MetaTitle.svelte';
  import WorkItem from '$lib/components/WorkItem.svelte';
</script>

<MetaTitle />

<Container class="flex w-full flex-col content-center pt-14">
  <Heading class="border-light-primary dark:border-dark-primary">About</Heading>
  <p class="mt-6 max-w-3xl lg:text-base/6">
    I am a senior developer focussed on front-end development for web and mobile. I use
    best practice methods to build anything from single page sites to large scale applications.
  </p>
  <p class="my-6 max-w-3xl  lg:text-base/6">
    A keen eye for animation and design comes from years spent working as a Flash
    developer/animator. I work closely with both UX and visual designers to build engaging
    interfaces.
  </p>
  <Heading class="border-light-secondary dark:border-dark-secondary">Work</Heading>
  <WorkItem>
    <Image src={HubbleHQ} width="100%" class="w-full" />
    <div>Next.js UI build for this on-demand workspace provider.</div>
  </WorkItem>
</Container>
