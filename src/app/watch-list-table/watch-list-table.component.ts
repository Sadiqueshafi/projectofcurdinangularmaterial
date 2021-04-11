import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies.data';

const movies: Movie[] = [
  {
    id: '1',
    title: 'Shingeki no Kyojin: The Final Season',
    episodes: 16,
    info_url: 'https://www.youtube.com/watch?v=XLCyhL_dkjY',
      watch_url: 'Watching Video' },
  {
    id: '2',
    title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
    episodes: 1,
    info_url: 'https://www.youtube.com/watch?v=XLCyhL_dkjY',
    watch_url: 'Watching Video'
  },
  {
    id: '3',
    title: 'Start-Up',
    episodes: 16,
    info_url: 'https://www.youtube.com/watch?v=XLCyhL_dkjY',
    watch_url: 'Watching Video'
  },
];


@Component({
  selector: 'app-watch-list-table',
  templateUrl: './watch-list-table.component.html',
  styleUrls: ['./watch-list-table.component.css']
})

export class WatchListTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  dataSource = movies;
  constructor() { }

  ngOnInit(): void {
  }

}
