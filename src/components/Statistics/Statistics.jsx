export const Statistics = ({title,stats}) => {
    return (
        <section class="statistics">
            <h2 class="title">{title}</h2>
            <ul class="stat-list">
                <li class="item">
                    <span class="label">{stats.statistics.docx}</span>
                    <span class="percentage">{stats.statistics.amount_docx}</span>
                </li>
                <li class="item">
                    <span class="label">{stats.statistics.pdf}</span>
                    <span class="percentage">{stats.statistics.amount_pdf}</span>
                </li>
                <li class="item">
                    <span class="label">{stats.statistics.mp3}</span>
                    <span class="percentage">{stats.statistics.amount_mp3}</span>
                </li>
                <li class="item">
                    <span class="label">{stats.statistics.mp4}</span>
                    <span class="percentage">{stats.statistics.amount_mp4}</span>
                </li>
            </ul>
        </section>
    );
};