interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  icon?: string;
}

export default function LinkCard({ title, description, url, icon }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-600 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="text-3xl flex-shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {description}
          </p>
        </div>
        <div className="text-gray-400 dark:text-gray-600 flex-shrink-0">
          →
        </div>
      </div>
    </a>
  );
}
