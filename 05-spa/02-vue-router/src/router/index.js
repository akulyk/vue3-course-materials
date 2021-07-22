import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'index',
      // alias: 'meetups'
      component: () => import('@/views/PageMeetups'),
    },
    {
      path: '/meetups',
      name: 'meetups',
      redirect: { name: 'index' },
      component: () => import('@/views/PageMeetups'),
    },
    {
      path: '/meetups/:meetupId(\\d+)',
      redirect: (to) => ({ name: 'meetup.description', params: to.params }),
      name: 'meetup',
      props: true,
      meta: {
        showReturnToMeetups: true,
      },
      component: () => import('@/views/PageMeetup'),
      children: [
        {
          path: '',
          alias: 'description',
          name: 'meetup.description',
          props: true,
          component: () => import('@/views/PageMeetupDescription'),
        },
        {
          path: 'agenda',
          name: 'meetup.agenda',
          props: true,
          component: () => import('@/views/PageMeetupAgenda'),
        },
      ],
    },
  ],
});
